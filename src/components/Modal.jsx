import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import Privacy from "./Privacy";
import TechLaminat from "./TechLam";
import TechInfusion from "./TechInfuz";
import TechSpray from "./TechSpray";

const Modal = ({ openModal, setOpenModal, content, lang }) => {

  return (
    <>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth={content === 1 ? false : "md"}
        scroll="paper"
      >
        <DialogContent dividers>
          {content === 1 && <Privacy lang={lang} />}
          {content === 2 && <TechLaminat lang={lang} />}
          {content === 3 && <TechInfusion lang={lang} />}
          {content === 4 && <TechSpray lang={lang} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)} variant="contained">Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Modal;