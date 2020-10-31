FROM ruby:2.6.3

RUN apt-get update -qq && \
  apt-get install -y nodejs \
  npm && \
  npm install -g yarn

# 作業ディレクトリを/jphacks2020に指定
WORKDIR /jphacks2020

# ローカルのGemfileをDokcerにコピー
COPY Gemfile* /jphacks2020/

# /sample_appディレクトリ上でbundle install
RUN bundle install