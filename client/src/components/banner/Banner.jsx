import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://cdn.pixabay.com/photo/2018/04/13/11/17/notepad-3316266_640.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 90px;
    color: #00FFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 30px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>MyBlog</Heading>
            <SubHeading>Express your Mind !</SubHeading>
        </Image>
    )
}

export default Banner;