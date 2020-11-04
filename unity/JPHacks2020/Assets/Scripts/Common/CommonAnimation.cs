using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public static class CommonAnimation
{
    public enum DURATION_TYPE
    {
        VERY_FAST,
        FAST,
        NORMAL,
        SLOW,
        VERY_SLOW,
    }

    /// <summary>
    /// FadeInアニメーションを呼び出す関数
    /// </summary>
    /// <param name="image">FadeInさせる画像</param>
    /// <param name="type">durationさせる速さのタイプ</param>
    /// <param name="alpha">FadeInさせた後のAlpha値</param>
    /// <param name="ease">EaseFunctionの設定</param>
    /// <returns></returns>
    public static Sequence FadeIn(Image image, DURATION_TYPE type, float alpha = 1f, Ease ease = Ease.Linear)
    {
        var seq = DOTween.Sequence();
        float duration = GetDurationInSec(type);
        var cacheColor = image.color;
        seq.OnStart(() => { image.color = new Color(cacheColor.r, cacheColor.g, cacheColor.b, 0.0f); });
        seq.Append(DOTween.To(() => image.color, color =>
        {
            image.color = color;
        }, new Color(cacheColor.r, cacheColor.g, cacheColor.b, alpha), duration)).SetEase(ease);
        return seq;
    }

    /// <summary>
    /// FadeOutアニメーションを呼び出す関数
    /// </summary>
    /// <param name="image">FadeOutさせる画像</param>
    /// <param name="type">durationさせる速さのタイプ</param>
    /// <param name="alpha">FadeOutさせた後のAlpha値</param>
    /// <param name="ease">EaseFunctionの設定</param>
    /// <returns></returns>
    public static Sequence FadeOut(Image image, DURATION_TYPE type, float alpha = 0f, Ease ease = Ease.Linear)
    {
        var seq = DOTween.Sequence();
        float duration = GetDurationInSec(type);
        var chacheColor = image.color;
        seq.OnStart(() => { image.color = new Color(chacheColor.r, chacheColor.g, chacheColor.b, 1.0f); });
        seq.Append(DOTween.To(() => image.color, color =>
        {
            image.color = color;
        }, new Color(chacheColor.r, chacheColor.g, chacheColor.b, alpha), duration)).SetEase(ease);
        return seq;
    }

    /// <summary>
    /// Popアップさせるイメージのアニメーション関数
    /// </summary>
    /// <param name="rectTransform">Popアップさせるやつ</param>
    /// <param name="ease">EaseFuncitonの設定</param>
    /// <param name="type">durationさせる速さのタイプ</param>
    /// <returns></returns>
    public static Sequence ImagePopUp(RectTransform rectTransform, Ease ease = Ease.Linear, DURATION_TYPE type = DURATION_TYPE.FAST)
    {
        var seq = DOTween.Sequence();
        float duration = GetDurationInSec(type);
        seq.OnStart(() => { rectTransform.localScale = new Vector3(0f, 0f, 0f); });
        seq.Append(rectTransform.DOScale(new Vector3(1f, 1f, 1f), duration)).SetEase(ease);
        return seq;
    }

    /// <summary>
    /// Popダウンさせるイメージのアニメーション関数
    /// </summary>
    /// <param name="rectTransform">Popダウンさせるやつ</param>
    /// <param name="ease">EaseFunctionの設定</param>
    /// <param name="type">durationさせる速さのタイプ</param>
    /// <returns></returns>
    public static Sequence ImagePopDown(RectTransform rectTransform, Ease ease = Ease.Linear, DURATION_TYPE type = DURATION_TYPE.FAST)
    {
        var seq = DOTween.Sequence();
        float duration = GetDurationInSec(type);
        seq.OnStart(() => { rectTransform.localScale = new Vector3(1f, 1f, 1f); });
        seq.Append(rectTransform.DOScale(new Vector3(0f, 0f, 0f), duration)).SetEase(ease);
        return seq;
    }

    /// <summary>
    /// UIの点滅を行うための関数（Textバージョン）
    /// </summary>
    /// <param name="text">点滅させるテキスト</param>
    /// <param name="ease">EaseFuncitonの設定</param>
    /// <param name="type">durationさせる速さのタイプ</param>
    /// <returns></returns>
    public static Sequence BlinkingUI(Text text, Ease ease = Ease.Linear, DURATION_TYPE type = DURATION_TYPE.SLOW)
    {
        var seq = DOTween.Sequence();
        float duration = GetDurationInSec(type);
        var textChacheColor = text.color;
        seq.OnStart(() => text.color = new Color(textChacheColor.r, textChacheColor.g, textChacheColor.b, 1.0f));
        seq.Append(DOTween.To(() => text.color.a, alpha => { text.color = new Color(textChacheColor.r, textChacheColor.g, textChacheColor.b, alpha); }, 0.0f, duration)).SetEase(ease);
        seq.Append(DOTween.To(() => text.color.a, alpha => { text.color = new Color(textChacheColor.r, textChacheColor.g, textChacheColor.b, alpha); }, 1.0f, duration)).SetEase(ease);
        seq.SetLoops(-1);
        return seq;
    }

    /// <summary>
    /// UIの点滅を行うための関数（Imageバージョン）
    /// </summary>
    /// <param name="image">点滅させるイメージ</param>
    /// <param name="ease">EaseFuncitonの設定</param>
    /// <param name="type">durationさせる速さのタイプ</param>
    /// <returns></returns>
    public static Sequence BlinkingUI(Image image, Ease ease = Ease.Linear, DURATION_TYPE type = DURATION_TYPE.SLOW)
    {
        var seq = DOTween.Sequence();
        float duration = GetDurationInSec(type);
        var textChacheColor = image.color;
        seq.OnStart(() => image.color = new Color(textChacheColor.r, textChacheColor.g, textChacheColor.b, 1.0f));
        seq.Append(DOTween.To(() => image.color.a, alpha => { image.color = new Color(textChacheColor.r, textChacheColor.g, textChacheColor.b, alpha); }, 0.0f, duration)).SetEase(ease);
        seq.Append(DOTween.To(() => image.color.a, alpha => { image.color = new Color(textChacheColor.r, textChacheColor.g, textChacheColor.b, alpha); }, 1.0f, duration)).SetEase(ease);
        seq.SetLoops(-1);
        return seq;
    }

    /// <summary>
    /// UIの点滅を行うための関数（CanvasGroupバージョン）
    /// </summary>
    /// <param name="canvasGroup">点滅させるCanvasGroup</param>
    /// <param name="ease">EaseFuncitonの設定</param>
    /// <param name="type">durationさせる速さのタイプ</param>
    /// <returns></returns>
    public static Sequence BlinkingUI(CanvasGroup canvasGroup, Ease ease = Ease.Linear, DURATION_TYPE type = DURATION_TYPE.SLOW)
    {
        var seq = DOTween.Sequence();
        float duration = GetDurationInSec(type);
        seq.OnStart(() => canvasGroup.alpha = 1.0f);
        seq.Append(canvasGroup.DOFade(0.0f, duration)).SetEase(ease);
        seq.Append(canvasGroup.DOFade(1.0f, duration)).SetEase(ease);
        seq.SetLoops(-1);
        return seq;
    }

    private static float GetDurationInSec(DURATION_TYPE type)
    {
        switch (type)
        {
            case DURATION_TYPE.VERY_FAST:
                return 0.1f;
            case DURATION_TYPE.FAST:
                return 0.25f;
            case DURATION_TYPE.NORMAL:
                return 0.5f;
            case DURATION_TYPE.SLOW:
                return 0.75f;
            case DURATION_TYPE.VERY_SLOW:
                return 1.5f;
            default:
                return 0.5f;
        }
    }
}
