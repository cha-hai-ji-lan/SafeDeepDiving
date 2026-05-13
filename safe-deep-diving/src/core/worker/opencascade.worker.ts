import initOpenCascade from "opencascade.js";
import { oc } from "../opencascade/cache";
self.onmessage = async (e) => {
    const { type, payload } = e.data;  // type: 消息类型，payload: 消息内容 这些都是主线程发送过来的数据
    switch (type) {
        case "INIT":
            // 1. 在 Worker 线程中初始化 OCCT
            try {
                oc.value = await initOpenCascade();
                // 2. 通知主线程初始化成功
                self.postMessage({ type: 'INIT_SUCCESS' });
            } catch (error) {
                self.postMessage({ type: 'INIT_ERROR', error: error });
            }
            break;

        default:
            break;
    }
}
