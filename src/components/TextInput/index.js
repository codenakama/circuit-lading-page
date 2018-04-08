import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const TextInput = styled.input`
	border: 1px solid #b5bac6;
	padding: 0.5em 1em;
	width: 100%;
	font-size: 1em;
	::placeholder {
		color: #b5bac6;
	}
`;

export default TextInput;
