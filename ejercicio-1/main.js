class MultimediaContent {
    constructor(title, streamingPrice, downloadPrice, duration) {
        this.title = title;
        this.streamingPrice = streamingPrice;
        this.downloadPrice = downloadPrice;
        this.duration = duration;
    }
}

class Service {
    constructor(type){
        this.type = type;
    }

    getMultimediaContent() {
        if (this.type === "StreamingService") return StreamingService;
        if (this.type === "DownloadService") return DownloadService;
    }
}

class PremiumContent extends MultimediaContent {
    constructor(additionalFee) {
        this.additionalFee = additionalFee;
    }
}

class registeredUser{
    constructor(services = []){
        this.services = services;
    }

    getTotAL() {
        let total = 0;

        this.services.forEach(service => {
            let multimediaContent = service.getMultimediaContent();

            if (typeof service == StreamingService) {
                total += multimediaContent.streamingPrice;
            } else if (typeof service == DownloadService) {
                total += multimediaContent.downloadPrice
            }

            if (typeof multimediaContent == PremiumContent) {
                total += multimediaContent.additionalFee
            }
        })

        return total;
    }

}

const service = new Service("StreamingService");

const typeOfMultimediaContent = service.getMultimediaContent();

const multimediaContent = new multimediaContent("hola", 1, 5, "20");

const user = new registeredUser(service);

