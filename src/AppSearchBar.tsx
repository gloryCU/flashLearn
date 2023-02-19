import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 50,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
  height: "inherit",
  width: "full",
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4,2,4, 3),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  borderWidth: 0,
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 8, 0),
    paddingLeft: "60px",
    transition: theme.transitions.create('width'),
    width: '70%',
  },
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function AppSearchBar() {
  return (
          <Box alignSelf={"center"} width="inherit">
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
        <StyledInputBase
            fullWidth
              placeholder="Search any topic…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search></Box>
      
  );
}
