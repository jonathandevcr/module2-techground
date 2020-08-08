const Page = require('./page');

class DashboardPage extends Page {

    get noArticlesLabel (){ return $('div=No articles are here... yet.')}
    get globalFeedTap () {return $('.nav-link=Your Feed')}
    
    getNoArticlesLabel(){
        return this.noArticlesLabel;
    }

    getGlobalFeedTap(){
        return this.globalFeedTap;
    }
}

module.exports = new DashboardPage();