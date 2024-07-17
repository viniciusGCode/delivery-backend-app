import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";

export const CreateVandor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {name, address, pincode, foodType, email, password, ownerName, phone} = <CreateVandorInput>req.body

};

export const GetVanndors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const GetVandorByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
