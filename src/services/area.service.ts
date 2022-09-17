import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAreaDto, UpdateAreaDto } from "../dtos";
import { InjectRepository } from "@nestjs/typeorm";
import { Area } from "../entities";
import { Repository } from "typeorm";

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area) private readonly areaRepository: Repository<Area>
  ) { }

  async create({ id, name }: CreateAreaDto){
    const area: Area = await this.areaRepository.create({id, name});
    return await this.areaRepository.save(area);
  }

  async findAll() : Promise<Area[]>{
    return await this.areaRepository.find();
  }

  async findOne(id: number){
    const area: Area = await this.areaRepository.findOne({
      where: { id }
    })
    if (!area){
      throw new NotFoundException('Area not found');
    }
    return area;
  }

  async update(id: number, { name }: UpdateAreaDto){
    const area : Area = await this.areaRepository.preload({
      id, name
    });
    if (!area){
      throw new NotFoundException('Area not found');
    }
    return await this.areaRepository.save(area);
  }
  async remove(id: number){
    const area : Area = await this.areaRepository.findOne({
      where: { id }
    });
    if (!area){
      throw new NotFoundException('Area not found');
    }
    await this.areaRepository.remove(area);
  }

}
