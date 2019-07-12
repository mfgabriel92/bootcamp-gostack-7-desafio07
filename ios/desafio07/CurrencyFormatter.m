#import "CurrencyFormatter.h"@implementation CurrencyFormatterRCT_EXPORT_MODULE();RCT_EXPORT_METHOD(format:(NSNumber * __nonnull)amount currencyCode:(NSString * __nonnull)currencyCode callback:(RCTResponseSenderBlock)callback)
{
    NSNumberFormatter *formatter = [[NSNumberFormatter alloc] init];
    [formatter setNumberStyle:NSNumberFormatterCurrencyStyle];
    [formatter setCurrencyCode:(NSString *) currencyCode];
    callback(@[[formatter stringFromNumber:amount]]);
}
@end
