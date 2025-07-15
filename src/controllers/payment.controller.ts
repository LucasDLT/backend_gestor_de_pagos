import { Request, Response } from "express";
import mercadopago from "../services/mercadoPago";
import { Preference } from "mercadopago";
import { MercadoPagoItem } from "../types";

export const createPreference = async (req: Request, res: Response) => {
  try {
    const items: MercadoPagoItem[] = req.body.items;

    const preference = {
      items,
      back_urls: {
        success: "https://pagos-dlt.vercel.app/success",
        failure: "https://pagos-dlt.vercel.app/failure",
        pending: "https://pagos-dlt.vercel.app/pending",
      },
     auto_return: "approved", 
    };
    const preferenceClient = new Preference(mercadopago); 
    const response = await preferenceClient.create({body: preference});
    return res.status(200).json({ id: response.id });
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    return res.status(500).json({ message: "Error al generar preferencia" });
  }
};
