import {HeroTable} from "@/data";
import {Component, Prop, Vue} from "vue-property-decorator";
import _ from "lodash";

@Component({})
class Hero extends Vue {
    @Prop({required: true})
    id!: number;
    @Prop({default: 48})
    size!: number;
    @Prop({default: true})
    showName!: boolean;

    protected render() {
        const {name, icon} = this.fetchHero(this.id);
        const nameSpan = <span>{this.showName ? name : ""}</span>;
        return (
            <div>
                <a-avatar size={this.size} src={icon} shape="square"/>
                {nameSpan}
            </div>
        );
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

export default Hero;
