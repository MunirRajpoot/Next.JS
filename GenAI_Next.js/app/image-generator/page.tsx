"use client";
import { useState } from "react";

const ImageGenerator = () => {
    const [text, setText] = useState("");
    const [url, setUrl] = useState("");

    const query = async (data) => {
        try {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
                {
                    headers: {
                        Authorization: "Bearer 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", // Replace with your actual token
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                const errorDetails = await response.json();
                console.error("Error details:", errorDetails);
                throw new Error("Failed to fetch the image");
            }

            const result = await response.json();
            return result.generated_image_url; // Adjust this according to the actual response format from the API
        } catch (error) {
            console.error("Error during fetch:", error);
            throw error;
        }
    };

    const onClickHandler = async () => {
        try {
            const input = { inputs: text };
            console.log("Sending request with input:", input); // Log the request data
            const result = await query(input);
            console.log("result", result);

            setUrl(result);
        } catch (error) {
            console.error("Error in onClickHandler:", error);
        }
    };

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Text-image" />
            <button onClick={onClickHandler}>Generate</button>
            {url && <img width={200} height={200} src={url} alt="Generated" />}
        </div>
    );
};

export default ImageGenerator;
