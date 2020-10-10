import {HeroTable} from "@/data";
import {Component, Prop, Vue} from "vue-property-decorator";
import _ from "lodash";

@Component
class HeroIcon extends Vue {
    @Prop({required: true})
    id!: number;
    @Prop({default: 48})
    size!: number;

    protected render() {
        const hero = this.fetchHero(this.id);
        return <a-avatar size={this.size} src={hero.icon} shape="square"/>;
    }

    private fetchHero(id: number) {
        const heroTable = HeroTable();
        /* eslint-disable */
        // @ts-ignore
        const hero = _.omit(heroTable[id], [id]);
        /* eslint-enable */
        return hero;
    }
}

export default HeroIcon;
