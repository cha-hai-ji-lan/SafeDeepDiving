import { welcome_inter_ctr} from '../core/cache';

/**
 * 关闭欢迎界面
*/
export const close_inter = () => {  
    welcome_inter_ctr["delay-hide"] = true;
    setTimeout(()=>{
    welcome_inter_ctr["show-inter"] = false;
    welcome_inter_ctr["delay-hide"] = false;

    }, 250)
}