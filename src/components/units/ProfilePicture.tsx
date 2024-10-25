
interface ProfilePictureProps {
    author: {
        name: string;
        profileUrl?: string;
    }
}

export default function ProfilePicture(props: ProfilePictureProps) {
    if (props.author.profileUrl) {
        return (
            <img className="object-cover rounded-full w-14 h-14"
                 src={props.author.profileUrl}
                 alt=""/>
        );
    } else {
        const fullName = props.author.name.split(" ").join("+");
        return (
            <img className="object-cover rounded-full w-14 h-14"
                 src={"https://ui-avatars.com/api/?name=" + fullName}
                 alt=""/>
        );
    }
}