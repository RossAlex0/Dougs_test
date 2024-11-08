import { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import Input from "../../components/Input/Input";
import Item from "../../components/Item/Item";
import { Operation, Stats } from "../../services/type/types";
import {
  getAllOperations,
  getOperationsStats,
  getOperationsWithQuery,
} from "../../services/request/get";
import { numberWithSpace } from "../../services/utils/formatNumber";
import { groupByDate } from "../../services/utils/formatDate";

import { homeStyle } from "./style";
import { colors } from "../../style/globalsStyle";

export default function Home() {
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const [statsData, setStatsData] = useState<Stats | undefined>();
  const [operationsData, setOperationsData] = useState<
    Operation[] | undefined
  >();
  const [refreshing, setRefreshing] = useState(false);
  const [searchOperationsData, setSearchOperationsData] = useState<
    Operation[] | undefined
  >();

  const getHomeData = async () => {
    const [stats, operations] = await Promise.all([
      getOperationsStats(),
      getAllOperations(),
    ]);
    setStatsData(stats);
    setOperationsData(operations);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setSearchOperationsData(undefined);
    setInputValue(undefined);
    getHomeData().finally(() => setRefreshing(false));
  }, []);

  const operationListByDate = searchOperationsData
    ? groupByDate(searchOperationsData)
    : operationsData && groupByDate(operationsData);

  const handleSubmitSearch = () => {
    getOperationsWithQuery(setSearchOperationsData, 10, inputValue, 0);
  };

  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.container_header}>
        <Input
          tools={{
            value: inputValue,
            placeholder: "Rechercher un élément",
            keyType: "search",
            keyboardType: "default",
            onSubmitEditing: () => handleSubmitSearch(),
            setOnChange: (value) => setInputValue(value),
          }}
        />
        <View style={homeStyle.header_stats}>
          {statsData && (
            <>
              <View style={homeStyle.stats_box}>
                <Text
                  style={[homeStyle.stats_nb, { color: colors.title_color }]}
                >
                  {numberWithSpace(Math.ceil(statsData.incomesTotal))} €
                </Text>
                <Text style={homeStyle.stats_label}>Crédit</Text>
              </View>
              <View style={homeStyle.stats_box}>
                <Text style={[homeStyle.stats_nb, { color: "#FD755F" }]}>
                  {numberWithSpace(Math.ceil(statsData.outcomesTotal))} €
                </Text>
                <Text style={homeStyle.stats_label}>Débit</Text>
              </View>
              <View style={homeStyle.stats_box}>
                <Text style={[homeStyle.stats_nb, { color: "#0ED094" }]}>
                  {numberWithSpace(Math.ceil(statsData.balanceTotal))} €
                </Text>
                <Text style={homeStyle.stats_label}>Solde</Text>
              </View>
            </>
          )}
        </View>
      </View>
      {operationListByDate && (
        <FlatList
          data={Object.keys(operationListByDate)}
          keyExtractor={(item) => item}
          renderItem={({ item: date }) => (
            <View>
              <View style={homeStyle.body_date}>
                <Text>{date}</Text>
              </View>
              {operationListByDate[date].map((operation) => (
                <Item key={operation.id} operation={operation} />
              ))}
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={colors.white_color}
              colors={[colors.white_color, colors.primary_color]}
              progressBackgroundColor={colors.primary_color}
            />
          }
          style={homeStyle.container_body}
        />
      )}
    </View>
  );
}
