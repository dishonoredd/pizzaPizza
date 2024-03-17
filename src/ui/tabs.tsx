import { ReactNode, useState } from "react";

{
    /* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */
}

type TabItem = {
    id: string;
    label: string;
    content: ReactNode;
};

type TabProps = {
    tabs: TabItem[];
    onChange: (item: TabItem) => void;
};

export function Tabs(props: TabProps) {
    const [selectedTabId, setSelectedTabId] = useState(props.tabs[0].id);

    return (
        <div>
            {props.tabs.map((tab) => (
                <div
                    key={tab.id}
                    onClick={() => setSelectedTabId(tab.id)}
                    style={selectedTabId === tab.id ? { background: "lime" } : undefined}
                >
                    {tab.label}
                </div>
            ))}
            <hr />
            {props.tabs.map((tab) => {
                if (tab.id !== selectedTabId) return;
                return <div key={tab.id}>{tab.content}</div>;
            })}
        </div>
    );
}
