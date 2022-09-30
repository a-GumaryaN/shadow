import ourTeamsImages from "../images/teams";

const ourTeams: {
    id: number,
    firstName: string,
    lastName: string,
    part: string,
    image: string,
    gmail: string,
    twitter: string,
    facebook: string
}[] = [
        {
            id: 1,
            firstName: 'JOHN',
            lastName: 'DOEL',
            part: 'Video Creation',
            image: ourTeamsImages.team_1,
            gmail: '',
            twitter: '',
            facebook: ''

        },
        {
            id: 2,
            firstName: 'ROY',
            lastName: 'DOEL',
            part: 'Motion Graphic',
            image: ourTeamsImages.team_2,
            gmail: '',
            twitter: '',
            facebook: ''
        },
        {
            id: 3,
            firstName: 'SASHA',
            lastName: 'DOEL',
            part: '3D Animation',
            image: ourTeamsImages.team_3,
            gmail: '',
            twitter: '',
            facebook: ''
        },
    ]


export default ourTeams;