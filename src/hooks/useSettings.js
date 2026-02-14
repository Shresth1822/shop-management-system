import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export const useSettings = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("settings")
        .select("*")
        .single();

      if (error) {
        // If no settings exist yet, returning null is expected, but if it's a different error, throw it
        if (error.code !== "PGRST116") throw error;
      }

      setSettings(
        data || {
          phone: "+91 98765 43210",
          email: "contact@haribhagwantraders.com",
          address: "Bisauli, Uttar Pradesh, India - 243720",
          business_hours: "Mon - Sat: 10:00 AM - 8:00 PM",
          whatsapp: "+919876543210",
          map_url:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14065.659637774936!2d78.9324!3d28.3075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b9680c2f5dcb7%3A0x6c6e75e1b4b0b0b0!2sBisauli%2C%20Uttar%20Pradesh%20243720!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin",
        },
      ); // Fallback to default if no settings
    } catch (err) {
      console.error("Error fetching settings:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { settings, loading, error, refetch: fetchSettings };
};
