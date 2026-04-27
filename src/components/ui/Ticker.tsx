import { useEffect, useState, useMemo } from "react";

const Ticker = () => {
    const [time, setTime] = useState(new Date());
    const hour = time.getHours();
    const locale = navigator.language;

    let message = "Stay productive";

    if (hour < 12) message = "Good morning!";
    else if (hour < 18) message = "Stay focused!";
    else message = "Time to relax!";
    useEffect(() => {
        const update = () => setTime(new Date());

        const delay = 60000 - (Date.now() % 60000);

        let interval: ReturnType<typeof setInterval>;

        const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
            update();
            interval = setInterval(update, 60000);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, []);

    const dateFormatter = useMemo(() => 
        new Intl.DateTimeFormat(locale, {
            weekday: 'short',
            day: 'numeric',
            month: 'long',
        }), []
    );

    const timeFormatter = useMemo(() => 
        new Intl.DateTimeFormat(locale, {
            hour: '2-digit',
            minute: '2-digit',
        }), []
    );

    const date = dateFormatter.format(time);
    const clock = timeFormatter.format(time);

    const items = [...Array(10)];

    return (
        <div className="relative overflow-hidden border-y border-gray-600  mb-4 bg-gray-900">
            

            <div className="flex w-max animate-marquee py-5">
                
                {[...items, ...items].map((_, i) => (
                    <span
                        key={i}
                        className=" font-orbitron mx-14 whitespace-nowrap tracking-widest flex items-center gap-4"
                    >
                        <span className="text-white font-bold md:text-xl ">
                            {message}
                        </span>
                        <span className="text-gray-500 mx-2 text-xs">●</span>
                        <span className="text-gray-400 text-lg md:text-xl">
                            {date}
                        </span>

                        <span className="text-gray-600">|</span>
                        <span className="text-red-500 animate-pulse mr-4">● LIVE</span>
                        <span className="text-gray-600">|</span>
                        <span className="text-red-500 text-2xl md:text-4xl font-bold drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">
                            {clock}
                        </span>
                        <span className="text-gray-500 mx-2 text-xs">●</span>
                        <span className="text-gray-500 font-bold text-sm md:text-base ml-6">
                            Made by minturion.com
                        </span>
                    </span>
                ))}

            </div>
        </div>
    );
};

export default Ticker;