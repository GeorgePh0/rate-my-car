import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";

function SignInForm() {

  return (
    <Row className={styles.Row}>
      <Col className={styles.Col}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
}

export default SignInForm;