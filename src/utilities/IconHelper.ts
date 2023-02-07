import  solid  from '@heroicons/vue/24/solid';
import  outline  from '@heroicons/vue/24/outline';

export default function getIcon( iconName:string, iconType:any ){
    type solidObjectKey = keyof typeof solid;
    type outlineObjectKey = keyof typeof outline;
    
    switch (iconType) {
        case 'solid':
            if(iconName in solid){
                return solid[iconName as solidObjectKey];
            }
            break;
        case 'outline':
            if(iconName in outline){
                return outline[iconName as outlineObjectKey];
            }
        default:
            break;
    }
    
}