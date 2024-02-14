import { FC } from 'react';

import Text from '@commercetools-uikit/text';
import { InfoMainPage } from '@commercetools-frontend/application-components';
import Card from '@commercetools-uikit/card';
import Spacings from '@commercetools-uikit/spacings';

import Grid from '@commercetools-uikit/grid';


type Props = {};
const PriceComparison: FC<Props> = () => { 

  return (
    <InfoMainPage
      title="Price Comparison"
      customTitleRow={
        <Spacings.Inline justifyContent="space-between">
          <Text.Headline as="h2">Competitor&apos;s Prices</Text.Headline>
        </Spacings.Inline>
      }      
    >
      <Card theme="light" type="raised">
        <Spacings.Stack scale={'xl'}>
          <Grid
            gridGap="16px"
            gridAutoColumns="1fr"
            gridTemplateColumns="repeat(2, 1fr)"
          >
            <Grid.Item>
             <div>target.com</div>
            </Grid.Item>
            <Grid.Item>
             <div>$299.99</div>
            </Grid.Item>
            <Grid.Item>
             <div>walmart.com</div>
            </Grid.Item>
            <Grid.Item>
             <div>$249.99</div>
            </Grid.Item>
          </Grid>
        </Spacings.Stack>
      </Card>
    </InfoMainPage>
  );
};

export default PriceComparison;
