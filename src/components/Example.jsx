import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'70%',
  bgcolor: 'background.paper',
  border: '1px solid pink',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            The history of the lands that became the United States began with the arrival of the first people in the Americas around 15,000 BC. Numerous indigenous cultures formed, and many saw transformations in the 16th century away from more densely populated lifestyles and towards reorganized polities elsewhere. The European colonization of the Americas began in the late 15th century, however most colonies in what would later become the United States were settled after 1600. By the 1760s, the thirteen British colonies contained 2.5 million people and were established along the Atlantic Coast east of the Appalachian Mountains. After defeating France, the British government imposed a series of taxes, including the Stamp Act of 1765, rejecting the colonists' constitutional argument that new taxes needed their approval. Resistance to these taxes, especially the Boston Tea Party in 1773, led to Parliament issuing punitive laws designed to end self-government. Armed conflict began in Massachusetts in 1775.

In 1776, in Philadelphia, the Second Continental Congress declared the independence of the colonies as the "United States". Led by General George Washington, it won the Revolutionary War. The peace treaty of 1783 established the borders of the new sovereign state. The Articles of Confederation established a central government, but it was ineffectual at providing stability as it could not collect taxes and had no executive officer. A convention wrote a new Constitution that was adopted in 1789 and a Bill of Rights was added in 1791 to guarantee inalienable rights. With Washington as the first president and Alexander Hamilton his chief adviser, a strong central government was created. Purchase of the Louisiana Territory from France in 1803 doubled the size of the United States.


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}