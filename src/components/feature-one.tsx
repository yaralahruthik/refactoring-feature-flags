import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

export default function FeatureOne() {
  return (
    <Paper elevation={3} sx={{ p: 3, borderLeft: '5px solid #f44336' }}>
      <Typography variant="h5" gutterBottom>
        Old Feature One
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the legacy version of Feature One with basic tools and layout.
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <FolderIcon color="action" />
          </ListItemIcon>
          <ListItemText primary="Basic data list" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BuildIcon color="action" />
          </ListItemIcon>
          <ListItemText primary="Minimal controls" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DescriptionIcon color="action" />
          </ListItemIcon>
          <ListItemText primary="Static content only" />
        </ListItem>
      </List>
    </Paper>
  );
}
