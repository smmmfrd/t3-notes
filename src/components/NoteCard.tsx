import { useState } from "react";

import reactMarkdown from "react-markdown";

import { RouterOutputs } from "~/utils/api"

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
    note,
    onDelete,
}: {
    note: Note;
    onDelete: () => void;
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    return (
        <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
            <div className="card-body m-0 p-3">
                <div 
                    className={`collapse collapse-arrow ${isExpanded ? "collapse-open" : ""
                    }`}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="collapse-title text-xl fond-bold">{note.title}</div>
                </div>
            </div>
        </div>
    );
};