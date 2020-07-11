import {InfoController} from "../controllers/info.controller";
import {container} from "tsyringe";
import {Application} from "express";
import {Logger} from "winston";
import {LoggerService} from "../services/logger.service";
import {CiviliteController} from "../controllers/civilite.controller";

export class Routes {

    private logger: Logger = container.resolve(LoggerService).getLogger("Routes");

    private infoController: InfoController = container.resolve(InfoController);
    private civiliteController: CiviliteController = container.resolve(CiviliteController);

    public routes(app: Application): void {

        // Infos
        app.route("/info").get((req, res) => this.infoController.getInfo(req, res));
        app.route("/ping").get((req, res) => this.infoController.getPing(req, res));

        // Civilites
        app.route("/civilite").get((req, res) => this.civiliteController.getCivilites(req, res));

    }

}
