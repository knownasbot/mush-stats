import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StatsContainer from "../components/StatsContainer";
import StatsContainerSkeleton from "../components/skeleton/StatsContainerSkeleton";
import ErrorPanel from "../components/panels/ErrorPanel";
import getGameFields from "../functions/getGameFields";

type RequestStatus = {
    error: boolean;
    finished: boolean;
    status: number | null;
};

export default function Profile() {
    const location = useLocation();

    const [requestStatus, setRequestStatus] = useState<RequestStatus>({
        error: false,
        finished: false,
        status: null,
    });

    const [userStats, setUserStats] = useState<ProfileInfo>({
        account: {
            uuid: "c06f8906-4c8a-4911-9c29-ea1dbd1aab82", // MHF_Steve
            username: "...",
            playTime: 0,
        },
        rank: {
            name: "Membro",
            color: "",
        },
        stats: [],
        createdAt: new Date(),
        joinedAt: new Date(),
    });

    useEffect(() => {
        async function fetchUserStats() {
            setRequestStatus({
                error: false,
                finished: false,
                status: null,
            });

            try {
                const res = await fetch(
                    "https://mush.com.br/api/player/" +
                        location.pathname.replace(/\/+/g, "")
                );

                if (res.ok) {
                    const body = await res.json();

                    if (body.success) {
                        document.title = `${body.response.account.username} — Mush Stats`;

                        const gameFields = getGameFields(body.response.stats);

                        setUserStats({
                            account: {
                                id: body.response.account.id,
                                uuid: body.response.account.unique_id,
                                username: body.response.account.username,
                                banned: body.response.banned,
                                playTime:
                                    body.response.stats?.play_time?.all ?? 0,
                            },
                            tag: body.response.profile_tag,
                            rank: body.response.rank_tag,
                            clan: {
                                tag: body.response.clan?.tag,
                                color: body.response.clan?.tag_color,
                            },
                            stats: gameFields,
                            createdAt: new Date(
                                body.response.first_login ?? Date.now()
                            ),
                            joinedAt: new Date(
                                body.response.last_login ?? Date.now()
                            ),
                        });

                        setRequestStatus({
                            error: false,
                            finished: true,
                            status: null,
                        });
                    } else {
                        setRequestStatus({
                            error: true,
                            finished: true,
                            status: body.error_code,
                        });
                    }
                } else {
                    setRequestStatus({
                        error: true,
                        finished: true,
                        status: res.status,
                    });
                }
            } catch {
                setRequestStatus({
                    error: true,
                    finished: true,
                    status: null,
                });
            }
        }

        fetchUserStats();
    }, [location]);

    return (
        <div
            style={{
                margin: "10vh auto",
                padding: "10px",
                maxWidth: "900px",
            }}
        >
            {requestStatus.finished && !requestStatus.error ? (
                <StatsContainer info={userStats} />
            ) : requestStatus.error ? (
                <ErrorPanel status={requestStatus.status as number} />
            ) : (
                <StatsContainerSkeleton />
            )}
        </div>
    );
}
