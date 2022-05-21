import {makeAutoObservable} from 'mobx'

export default class InfoStore {
    constructor() {
        this._news = []
        this._files = []
        makeAutoObservable(this);
    }

    setNews(news) {
        this._news = news;
    }

    setFiles(files) {
        this._files = files;
    }

    get news(){
        return this._news
    }

    get files(){
        return this._files
    }

}
