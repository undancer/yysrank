import { Component, Vue } from "vue-property-decorator";

@Component
class Footer extends Vue {
  protected render() {
    console.log("FOO");
    return (
      <div style="text-align: center">
        <div class="copyright">
          ©<span itemprop="copyrightYear">2020</span>
          <span class="with-love">
            <i class="fa fa-user"></i>
          </span>
          <span class="author" itemprop="copyrightHolder">
            undancer
          </span>
        </div>
        <div class="powered-by">
          由
          <a
            href="https://hexo.io/"
            class="theme-link"
            rel="noopener"
            target="_blank"
          >
            Hexo
          </a>
          &amp;
          <a
            href="https://theme-next.org/"
            class="theme-link"
            rel="noopener"
            target="_blank"
          >
            NexT.Gemini
          </a>
          强力驱动
        </div>
      </div>
    );
  }
}

export default Footer;
