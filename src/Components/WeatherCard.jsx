import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function WeatherCard({ weather }) {

    const HOT =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zm1AdFopbkjb1BiT0Tl1pkgIofh9ESanqJrJiCxFeQ1qTM_DrJAQIWsl&s=10";

    const COLD =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrsan7E-Q0sfpsfyJDNj8JM1UGzDkV-vHPzoQ5pnS_A&s=10";

    const RAINY =
        "https://img.magnific.com/free-photo/cute-kid-plaiyng-rainy-day_1157-22935.jpg?semt=ais_hybrid&w=740&q=80";


    const weatherImage = weather.main.temp > 25 ? HOT : weather.main.temp < 10 ? COLD : RAINY;
    const weatherIcon =
    weather.main.temp > 25
        ? <SunnyIcon />
        : weather.main.temp < 10
            ? <AcUnitIcon />
            : <CloudySnowingIcon />;


    return (
        <Card
            sx={{
                maxWidth: 500,
                margin: "30px auto",
                borderRadius: 3,
                boxShadow: 4
            }}
        >

            <CardActionArea>

                <CardMedia
                    component="img"
                    height="220"
                    image={weatherImage}
                    alt="Weather"
                />

                <CardContent>

                    <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        align="center"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1
                        }}
                    >
                        {weatherIcon}
                        {weather.name}, {weather.sys.country}
                    </Typography>

                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ marginBottom: 2 }}
                    >
                        {weather.main.temp} °C
                    </Typography>

                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ marginBottom: 3 }}
                    >
                        {weather.weather[0].description}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ marginBottom: 1 }}
                    >
                        <strong>Min Temp:</strong>{" "}
                        {weather.main.temp_min}°C
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ marginBottom: 1 }}
                    >
                        <strong>Max Temp:</strong>{" "}
                        {weather.main.temp_max}°C
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ marginBottom: 1 }}
                    >
                        <strong>Feels Like:</strong>{" "}
                        {weather.main.feels_like}°C
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ marginBottom: 1 }}
                    >
                        <strong>Humidity:</strong>{" "}
                        {weather.main.humidity}%
                    </Typography>

                    <Typography variant="body1">
                        <strong>Wind Speed:</strong>{" "}
                        {weather.wind.speed} m/s
                    </Typography>

                </CardContent>

            </CardActionArea>

        </Card>
    );
}