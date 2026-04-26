<template>
    <div id="main" ref="containerRef">
        <!-- vtkFullScreenRenderWindow 会接管此容器 -->
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import "@kitware/vtk.js/Rendering/Profiles/Geometry";  // 引入几何配置
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';  // 引入全屏渲染窗口
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';  // 引入演员
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';  // 引入映射器
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource';  // 引入圆锥体源
import vtkOutlineFilter from '@kitware/vtk.js/Filters/General/OutlineFilter';  // 引入轮廓过滤器
// import vtkFeatureEdges from '@kitware/vtk.js/Filters/General/FeatureEdges';  // 


const containerRef = ref<HTMLDivElement | null>(null);
let fullScreenRenderer: any = null;
let resizeObserver: ResizeObserver | null = null;

const outline = ref()

onMounted(() => {
    if (!containerRef.value) return;

    // 创建 ResizeObserver 监听容器尺寸
    resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            // 只有当尺寸大于 0 且尚未初始化时才初始化
            if (width > 0 && height > 0 && !fullScreenRenderer) {
                initVTK();
                // 初始化后可以断开观察，或者保留以处理窗口缩放
                // resizeObserver?.disconnect(); 
            } else if (fullScreenRenderer) {
                // 如果已经初始化，窗口大小改变时通知 VTK 调整
                fullScreenRenderer.resize();
            }
        }
    });

    resizeObserver.observe(containerRef.value);  // 监听容器尺寸
});

onBeforeUnmount(() => {
    if (resizeObserver) {
        resizeObserver.disconnect();
    }
    if (fullScreenRenderer) {
        fullScreenRenderer.delete();
        fullScreenRenderer = null;
    }
});

function initVTK() {
    try {
        // 1. 创建全屏渲染窗口
        fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
            background: [0, 0, 0, 0],
            container: containerRef.value as HTMLDivElement,
        });
        outline.value = vtkOutlineFilter.newInstance();


        const renderer = fullScreenRenderer.getRenderer();
        const renderWindow = fullScreenRenderer.getRenderWindow();

        // 2. 创建圆锥体
        const coneSource = vtkConeSource.newInstance({ height: 1.0, radius: 0.5, resolution: 4 });
        // 创建轮廓过滤器并连接圆锥体数据
        outline.value.setInputConnection(coneSource.getOutputPort());


        // 3. Mapper 将数据映射到图形对象
        const mapper = vtkMapper.newInstance();
        mapper.setInputConnection(coneSource.getOutputPort());

        const outlineMapper = vtkMapper.newInstance();
        outlineMapper.setInputConnection(outline.value.getOutputPort());

        // 4. Actor 用来将图形对象映射到屏幕上
        const actor = vtkActor.newInstance();
        const actor1 = vtkActor.newInstance();
        actor.getProperty().setRepresentationToWireframe();
        actor.getProperty().setColor(0, 0, 0); // 黄色边线
        actor.getProperty().setLineWidth(1);   // 线宽

        const outlineActor = vtkActor.newInstance();
        outlineActor.setMapper(outlineMapper);


        actor.setMapper(mapper);
        actor1.setMapper(mapper);

        // 4. 设置边线颜色和线宽
        outlineActor.getProperty().setColor(0, 0, 0); // 白色边线
        outlineActor.getProperty().setLineWidth(1);   // 线宽

        // 5. 添加到场景
        renderer.addActor(actor);
        renderer.addActor(actor1);
        renderer.addActor(outlineActor);

        // 6. 重置相机
        renderer.resetCamera();

        // 7. 首次渲染
        renderWindow.render();

        console.log('VTK initialized successfully');
    } catch (error) {
        console.error('Failed to initialize VTK:', error);
    }
}
</script>

<style scoped>
#main {
    display: flex;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
    /* 确保父容器也有高度 */
    border-radius: 8px;
    background-color: rgba(var(--background), var(--b-transparent));
    position: relative;
    overflow: hidden;
}
</style>