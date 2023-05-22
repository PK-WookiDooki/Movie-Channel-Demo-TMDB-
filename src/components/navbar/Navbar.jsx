import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { setGenreFilter } from "../../features/services/movieSlice";
import AccountMenu from "../accountMenu/AccountMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  const { moviesList } = useSelector((state) => state.movies);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const searchedMovies = moviesList.filter((mv) =>
    mv.title.toLowerCase().includes(search.toLowerCase())
  );
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (search.trim().length == 0 && search.trim().value == null) {
      setSearch("");
      navigate("/");
    } else {
      setSearch("");
      navigate("/search", { state: { searchedMovies } });
    }
  };

  //for the main page search without going to searchedPage

  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   const searched = moviesList.filter((mv) =>
  //     mv.title.toLowerCase().includes(search.toLowerCase())
  //   );

  //   if (search.trim().length == 0 && search.trim().value == null) {
  //     dispatch(setGenreFilter(moviesList));
  //   } else {
  //     dispatch(setGenreFilter(searched));
  //   }
  // }, [search]);

  return (
    <AppBar position="static" className="rounded-b">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={"a"}
            href={"/"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <nav className="flex flex-col gap-2 relative px-2">
                <NavLink
                  to={"/"}
                  className="nav-link px-3 py-[5px] duration-200 rounded-sm text-center"
                >
                  Home
                </NavLink>

                <NavLink
                  to={"/all_movies"}
                  className="nav-link px-3 py-[5px] duration-200 rounded-sm text-center"
                >
                  All Movies
                </NavLink>

                <NavLink
                  to={"/top_rated"}
                  className="nav-link px-3 py-[5px] duration-200 rounded-sm text-center"
                >
                  Top-Rated
                </NavLink>
              </nav>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "block", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <nav className="flex gap-3 items-center">
              <NavLink
                to={"/"}
                className="nav-link px-5 py-[5px] duration-200 rounded-sm"
              >
                Home
              </NavLink>

              <NavLink
                to={"/all_movies"}
                className="nav-link px-5 py-[5px] duration-200 rounded-sm"
              >
                All Movies
              </NavLink>

              <NavLink
                to={"/top_rated"}
                className="nav-link px-5 py-[5px] duration-200 rounded-sm"
              >
                Top-Rated
              </NavLink>
            </nav>
          </Box>
          <AccountMenu />
          <form onSubmit={onSubmitHandler} action="">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                // inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Search>
          </form>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
