import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import vaccinationStore from '../stores/vaccinationStore';

const VaccinationSummary = () => {
  const store = vaccinationStore();
  const [recentVaccinations, setRecentVaccinations] = useState([]);
  useEffect(() => {
    store.getVaccinations();
  }, [store]);

  useEffect(() => {
    const vacc = (store.vaccinations || []).slice(-3);
    setRecentVaccinations(vacc);
  }, [store.vaccinations]);
  return (
    <Container>
      <Row>
        <h3 className="font2">Vaccination Summary</h3>
      </Row>
      <Row>
        <Stack className="font1" gap={2}>
          {recentVaccinations &&
            recentVaccinations.map((item) => {
              return (
                <div className="p-2 homeBack around" key={item._id}>
                  <span>{item.medication}</span>{' '}
                  <span>Due: {item.nextDate.slice(0, 10)}</span>
                </div>
              );
            })}
        </Stack>
      </Row>
    </Container>
  );
};

export default VaccinationSummary;
