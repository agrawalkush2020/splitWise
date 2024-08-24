import react from "react";

const Group = ({
    photo = "default_image.jpg",  // Provide a default image path or URL
    name = "",
    id=-1,
    openTheGroup = ()=>{}
}) => {
    return (
        <div onClick={()=>openTheGroup(id)} className="flex">
            <div>
                <img src={photo} alt="Group Icon" width="500" height="auto" />
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}

export default Group;