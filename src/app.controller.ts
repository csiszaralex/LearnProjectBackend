import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test')
@Controller('')
export class AppController {
  private data = [
    {
      id: 1,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/2000/91C499/000?text=1',
    },
    {
      id: 2,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/520/F2E9DC/000?text=2',
    },
    {
      id: 3,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/325/CFD11A/000?text=3',
    },
    {
      id: 4,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/8783D1/000?text=4',
    },
    {
      id: 5,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/D1ABAD/000?text=5',
    },
    {
      id: 6,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/AA9ABA/000?text=6',
    },
    {
      id: 7,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/DEC5E3/000?text=7',
    },
    {
      id: 8,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/CDEDFD/000?text=8',
    },
    {
      id: 9,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/81F7E5/000?text=9',
    },
    {
      id: 10,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/50723C/000?text=10',
    },
    {
      id: 11,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/423E28f00/000?text=11',
    },
    {
      id: 12,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/ADEEE3/000?text=12',
    },
    {
      id: 13,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/FFB7C3/000?text=13',
    },
    {
      id: 14,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/D9F2B4/000?text=14',
    },
    {
      id: 15,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/D3FAC7/000?text=15',
    },
    {
      id: 16,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/EAF8BF/000?text=16',
    },
    {
      id: 17,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/C8D6AF/000?text=17',
    },
    {
      id: 18,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/FFA5AB/000?text=18',
    },
    {
      id: 19,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/CFCFCD/000?text=19',
    },
    {
      id: 20,
      cim: 'Teszt bejegyzés',
      alcim: 'Valami teszt',
      picture: 'https://via.placeholder.com/200/D7DEDC/000?text=20',
    },
  ];

  @Get('homepage')
  test(@Query('limit') limit = 3, @Query('page') page = 1) {
    return this.data.filter(d => (page - 1) * limit < d.id && d.id <= page * limit);
  }
}
