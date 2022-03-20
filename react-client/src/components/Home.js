import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Home = () => {
    const [emojis, setEmojis] = useState([]);

    const fetchEmoji = async ( emojiId ) => {
        let { data: emojis, error } = await supabase
            .from("emojis")
            .select("*")
            .eq("id", emojiId);
        if (error) console.log("error", error);
        else setEmojis(emojis);
        console.log('fetchEmojis', emojis)
    };

    const handleFetchRandomeEmoji = () => {
        let emojiId = Math.floor(Math.random() * 3) + 1;
        fetchEmoji(emojiId)
    }

    return (
        <div className="box">
            <div>
                <button
                    onClick={handleFetchRandomeEmoji}
                >
                    Voy a tener suerte
                </button>

                {emojis.length ? (
                    emojis.map((emoji) => (
                        <span key={emoji.id}>{emoji.unicode}</span>
                    ))
                ) : (
                    <span>
                        {/* No emojis */}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Home;