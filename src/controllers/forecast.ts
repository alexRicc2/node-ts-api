import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller('forecast')
export class ForecastController {


  @Post('somaNumeros')
  public PostTesteDoAlex(req: Request, res: Response): void{
    const {numero, numero2} = req.body
    res.send({soma: numero + numero2})
  }
  
  @Post('login')
  public LoginTesteDoAlex(req: Request, res: Response): void{
    if(!req.body.username || !req.body.password)
      res.sendStatus(400)
    
    res.send({userId: 40})
  }

  @Get('')
  public getForecastForgeLoggedUser(_: Request, res: Response): void {
    res.send([{
      "time": "2020-04-26T00:00:00+00:00",
      "forecast": [{
        "lat": -33.792726,
        "lng": 151.289824,
        "name": "Manly",
        "position": "E",
        "rating": 2,
        "swellDirection": 64.26,
        "swellHeight": 0.15,
        "swellPeriod": 3.89,
        "time": "2020-04-26T00:00:00+00:00",
        "waveDirection": 231.38,
        "waveHeight": 0.47,
        "windDirection": 299.45
      }]
    }, {
      "time": "2020-04-26T01:00:00+00:00",
      "forecast": [{
        "lat": -33.792726,
        "lng": 151.289824,
        "name": "Manly",
        "position": "E",
        "rating": 2,
        "swellDirection": 123.41,
        "swellHeight": 0.21,
        "swellPeriod": 3.67,
        "time": "2020-04-26T01:00:00+00:00",
        "waveDirection": 232.12,
        "waveHeight": 0.46,
        "windDirection": 310.48
      }] }
    ]);
  }
}
