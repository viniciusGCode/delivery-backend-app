import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../models";

export const CreateVandor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    address,
    pincode,
    foodType,
    email,
    password,
    ownerName,
    phone,
  } = <CreateVandorInput>req.body;

  const createdVandor = await Vandor.create({
    name,
    address,
    pincode,
    foodType,
    email,
    password,
    salt: "123213",
    ownerName,
    phone,
    rating: 0,
    serviceAvailable: false,
    coverImages: [],
  });

  return res.json({ createdVandor });
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
) => {
  return res.send("hello world");
};
