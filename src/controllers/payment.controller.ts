import { Request, Response } from "express";
import mercadopago from "../services/mercadoPago";
import { Preference } from "mercadopago";

export const createPreference = async (req: Request, res: Response) => {
  try {
    const items = req.body.items;

    const preference = {
      items,
      back_urls: {
        success: "http://localhost:3001/success",
        failure: "http://localhost:3001/failure",
        pending: "http://localhost:3001/pending",
      },
     // auto_return: "approved", esta comentada esta parte por que no se puede usar en la version gratuita de mercado pago el localhost. AL DEPLOYAR DESCOMENTAR
    };
    const preferenceClient = new Preference(mercadopago); 
    const response = await preferenceClient.create({body: preference});
    return res.status(200).json({ id: response.id });
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    return res.status(500).json({ message: "Error al generar preferencia" });
  }
};
