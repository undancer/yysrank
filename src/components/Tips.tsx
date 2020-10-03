import {Component, Vue} from "vue-property-decorator";
import {ModalOptions} from "ant-design-vue/types/modal";

@Component
class Tips extends Vue {
    protected render() {
        const modalOptions: ModalOptions = {};
        this.$info(modalOptions);
        return;
    }
}
