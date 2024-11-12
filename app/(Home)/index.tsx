import { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";

import Input from "../../components/Input/Input";
import Item from "../../components/Item/Item";

import { Operation, Stats } from "../../services/type/types";
import {
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
  const [searchWithInput, setSearchWithInput] = useState(false);

  const [offset, setOffset] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const [stats, operations] = await Promise.all([
        getOperationsStats(),
        getOperationsWithQuery(10, 0),
      ]);
      setStatsData(stats);
      setOperationsData(operations);
    };
    getData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    const operation = await getOperationsWithQuery(10, 0);
    setOperationsData(operation);
    setSearchWithInput(false);
    setTimeout(() => setRefreshing(false), 800);
  }, []);

  const handleSubmitSearch = async () => {
    if (inputValue !== "") {
      const operations = await getOperationsWithQuery(10, 0, inputValue);
      setOperationsData(operations);
      setSearchWithInput(true);
      setInputValue("");
    }
  };

  const handleScrollList = async () => {
    if (operationsData) {
      const operations = await getOperationsWithQuery(10, offset);
      setOperationsData([...operationsData, ...operations]);
      setOffset((prev) => prev + 10);
    }
  };

  const operationListByDate = operationsData && groupByDate(operationsData);

  const statsBoxData = [
    {
      label: "Crédit",
      color: colors.title_color,
      amount: statsData?.incomesTotal || 0,
    },
    { label: "Débit", color: "#FD755F", amount: statsData?.outcomesTotal || 0 },
    { label: "Solde", color: "#0ED094", amount: statsData?.balanceTotal || 0 },
  ];

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
          {statsBoxData.map((stat) => (
            <View style={homeStyle.stats_box} key={stat.label}>
              <Text style={[homeStyle.stats_nb, { color: stat.color }]}>
                {numberWithSpace(Math.ceil(stat.amount))} €
              </Text>
              <Text style={homeStyle.stats_label}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>
      {operationListByDate && (
        <FlatList
          data={Object.keys(operationListByDate)}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item: date }) => (
            <View key={date}>
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
          onEndReached={() => !searchWithInput && handleScrollList()}
          onEndReachedThreshold={0.1}
          style={homeStyle.container_body}
        />
      )}
    </View>
  );
}
