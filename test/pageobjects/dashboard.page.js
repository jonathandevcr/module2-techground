const Page = require('./page');

class DashboardPage extends Page {

    get noArticlesLabel (){ return $('div=No articles are here... yet.')}
    get globalFeedTap () {return $('.nav-link=Your Feed')}
    get yourFeedTap () { return $('.nav-link=Your Feed')}
    
    getNoArticlesLabel(){
        return this.noArticlesLabel;
    }

    getYourFeedTap () {
        return this.yourFeedTap;
    }

    getGlobalFeedTap(){
        return this.globalFeedTap;
    }


}

module.exports = new DashboardPage();