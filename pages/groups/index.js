import react from "react";
import Group from "../../components/Group";

const Groups = ({
    allGroups = []
}) => {

    openTheGroup = () => {

    }

    return (
        <>
            {/* FOR ALL GROUPS */}
            <div>
                <header>
                    Groups
                </header>
                <div>
                    {allGroups.map((grp) => {
                        <Group
                            name={grp.name}
                            photo={grp.photo}
                            id={grp.id}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default Group;