import {Request, Response} from 'express';
import {autoInjectable, container} from "tsyringe";
import {Logger} from "winston";
import {LoggerService} from "../services/logger.service";
import {Controller} from "./controller";
import {CiviliteService} from "../services/civilite.service";

@autoInjectable()
export class CiviliteController extends Controller {

    private logger: Logger = container.resolve(LoggerService).getLogger("CiviliteController");
    private civiliteService: CiviliteService = container.resolve(CiviliteService);

    public getCivilites(req: Request, res: Response): void {
        this.ok(res, this.civiliteService.getCivilities());
    }

}
