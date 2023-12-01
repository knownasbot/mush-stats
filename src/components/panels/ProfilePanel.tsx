import styled from "styled-components";
import { Icon } from "@iconify/react";
import Panel from "./Panel";

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    background: lightgray;
    border-radius: 50%;
    user-select: none;
`;

const ProfileInfo = styled.div`
    margin-left: 10px;
    opacity: 0.9;
`;

const NameContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3px;
`;

const PlayerUsername = styled.h2`
    margin: 0;
    font-size: 40px;
    font-weight: 500;
`;

const PlayerTag = styled.b`
    display: inline-flex;
    padding: 6px 8px;
    margin-left: 10px;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    user-select: none;
    text-transform: uppercase;
`;

const RankTag = styled(PlayerTag)<{
    rankcolor: string;
}>`
    background: ${(props) => props.rankcolor};

    @media (max-width: 600px) {
        margin-left: 0;
    }
`;

const ClanTag = styled(PlayerTag)<{
    tagcolor: string;
}>`
    display: flex;
    align-content: center;
    background: ${(props) => props.tagcolor};
`;

const BanTag = styled(PlayerTag)`
    background: #fc2a2e;
`;

const DateContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px;

    @media (max-width: 460px) {
        margin-top: 20px;
    }
`;

const DateInfo = styled.div`
    display: inline-flex;
    align-items: center;
    font-size: 20px;
`;

export default function ProfilePanel({
    account,
    clan,
    tag,
    rank,
    createdAt,
    joinedAt,
}: ProfileInfo) {
    return (
        <Panel
            style={{
                display: "flex",
                padding: "25px 20px",
            }}
        >
            <Avatar
                src={`https://crafatar.com/avatars/${account.uuid}?size=100`}
                alt="Avatar do Jogador"
                draggable="false"
            />

            <ProfileInfo>
                <NameContainer>
                    <div
                        style={{
                            display: "inline-flex",
                        }}
                    >
                        <Icon icon="mdi:account" width={48} height={48} />
                        <PlayerUsername>{account.username}</PlayerUsername>
                    </div>

                    <div
                        style={{
                            display: "inline-flex",
                        }}
                    >
                        {tag && tag.name != rank.name && (
                            <RankTag rankcolor={tag.color}>{tag.name}</RankTag>
                        )}
                        <RankTag rankcolor={rank.color}>{rank.name}</RankTag>

                        {clan?.tag && (
                            <ClanTag tagcolor={clan.color}>
                                <Icon
                                    icon="material-symbols:shield"
                                    width={24}
                                    height={24}
                                />

                                {clan.tag}
                            </ClanTag>
                        )}

                        {account.banned && (
                            <BanTag>
                                <Icon
                                    icon="mdi:court-hammer"
                                    width={24}
                                    height={24}
                                />
                                Banido
                            </BanTag>
                        )}
                    </div>
                </NameContainer>

                <DateContainer>
                    <DateInfo>
                        <Icon
                            icon="material-symbols:calendar-add-on"
                            width={36}
                            height={36}
                        />

                        {createdAt.toLocaleDateString()}
                    </DateInfo>

                    <DateInfo>
                        <Icon
                            icon="material-symbols:calendar-month"
                            width={34}
                            height={34}
                        />

                        {joinedAt.toLocaleDateString()}
                    </DateInfo>
                </DateContainer>
            </ProfileInfo>
        </Panel>
    );
}
