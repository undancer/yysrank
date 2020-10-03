import { Component, Vue } from "vue-property-decorator";

@Component
class Footer extends Vue {
  protected render() {
    const copyright = this.renderCopyright();
    const poweredBy = this.renderPoweredBy();
    return (
      <div style="text-align: center;">
        {copyright}
        {poweredBy}
      </div>
    );
  }

  renderCopyright() {
    const year = new Date().getFullYear();
    return (
      <div class="copyright">
        ©<span itemprop="copyrightYear">{year}</span>
        <span class="with-love">
          <i class="fa fa-user"></i>
        </span>
        <span class="author" itemprop="copyrightHolder">
          undancer
        </span>
      </div>
    );
  }

  renderPoweredBy() {
    return (
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
    );
  }
}

export default Footer;
