import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function SearchBox({ city, setCity, onSearch }) {

    return (
        <form onSubmit={onSearch} className="search-form">

            <TextField
                id="city"
                label="City Name"
                variant="outlined"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
            />

            <Button
                variant="contained"
                color="warning"
                size="large"
                type="submit"
            >
                Search
            </Button>

        </form>
    );
}