export interface inputSignUp {
  icon: any;
  name: string;
  label: string;
  placeholder: string;
}

export interface PropsSignUp {
  handleChangeSignUp: (e: { target: { name: string; value: string } }) => void;
  submitSignUp: () => void;
  handleConfirmPassWord: (e: {
    target: { name: string; value: string };
  }) => void;
  handleShowForm: () => void;
  codePostal: string;
  selectedVille: string;
  handleCodePostalChange: () => void;
  handleVilleChange: () => void;
  villes: string[];
}
