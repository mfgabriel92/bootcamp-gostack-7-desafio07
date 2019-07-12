package com.desafio07.modules;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.text.NumberFormat;
import java.util.Currency;
import java.util.Locale;

public class CurrencyFormatterModule extends ReactContextBaseJavaModule {
  public CurrencyFormatterModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "CurrencyFormatter";
  }

  @ReactMethod
  public void format(double amount, String currencyCode, Callback callback) {
    try {
      Currency currency = Currency.getInstance(currencyCode);
      NumberFormat format = NumberFormat.getCurrencyInstance(Locale.getDefault());
      format.setMaximumFractionDigits(currency.getDefaultFractionDigits());
      format.setCurrency(currency);
      callback.invoke(format.format(amount));
    } catch (Exception e) {
      callback.invoke("-");
    }
  }
}
