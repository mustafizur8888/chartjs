using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ChartJs.Startup))]
namespace ChartJs
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
