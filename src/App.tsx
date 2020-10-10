import {Component, Vue} from "vue-property-decorator";
import Layout from "@/layout/Layout";

import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/app.scss";

@Component({
    components: {
        Layout
    }
})
class App extends Vue {
    render() {
        return (
            <div id="app">
                <Layout/>
            </div>
        )
    }
}

export default App;
